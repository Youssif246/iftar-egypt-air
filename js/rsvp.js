/* ==========================================================================
   EGYPTAIR — RSVP FRONTEND DEMO
   Visual frontend demonstration with progressive steps & refined confirmation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const btnAccept = document.getElementById('rsvp-accept-btn');
  const btnDecline = document.getElementById('rsvp-decline-btn');
  const formProgressive = document.getElementById('rsvp-progressive-form');
  
  const step1 = document.getElementById('rsvp-step-1');
  const step2 = document.getElementById('rsvp-step-2');
  const step3 = document.getElementById('rsvp-step-3');

  const btnStep1Next = document.getElementById('btn-step-1-next');
  const btnStep2Next = document.getElementById('btn-step-2-next');
  const btnStep2Prev = document.getElementById('btn-step-2-prev');
  const btnStep3Prev = document.getElementById('btn-step-3-prev');
  const btnSubmitRsvp = document.getElementById('btn-submit-rsvp');

  const nameInput = document.getElementById('rsvp-name-input');
  const confirmationModal = document.getElementById('confirmation-modal');
  const btnCloseConfirmation = document.getElementById('btn-close-confirmation');

  // Attendance Choices
  if (btnAccept) {
    btnAccept.addEventListener('click', () => {
      btnAccept.classList.add('primary');
      if (btnDecline) btnDecline.classList.remove('primary');
      if (formProgressive) {
        formProgressive.classList.add('active');
        showStep(1);
        if (nameInput) nameInput.focus();
      }
    });
  }

  if (btnDecline) {
    btnDecline.addEventListener('click', () => {
      if (formProgressive) formProgressive.classList.remove('active');
      if (btnAccept) btnAccept.classList.remove('primary');
      btnDecline.classList.add('primary');
      alert('نشكركم جزيل الشكر. نتمنى لكم رمضانًا مباركًا ونسعد بلقائكم في مناسبات قادمة بإذن الله.');
    });
  }

  // Progressive Step Navigation
  function showStep(stepNum) {
    [step1, step2, step3].forEach((step, idx) => {
      if (step) {
        step.classList.toggle('current', idx + 1 === stepNum);
      }
    });
  }

  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => {
      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = '#ff6b6b';
        nameInput.placeholder = 'يرجى إدخال الاسم الكريم أولاً';
        return;
      }
      nameInput.style.borderColor = '';
      showStep(2);
    });
  }

  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => {
      showStep(3);
    });
  }

  if (btnStep2Prev) {
    btnStep2Prev.addEventListener('click', () => showStep(1));
  }

  if (btnStep3Prev) {
    btnStep3Prev.addEventListener('click', () => showStep(2));
  }

  // Final RSVP Submission Simulation -> Reveal Cinematic Confirmation Modal
  if (btnSubmitRsvp) {
    btnSubmitRsvp.addEventListener('click', (e) => {
      e.preventDefault();

      if (confirmationModal) {
        confirmationModal.classList.add('active');
      }
    });
  }

  if (btnCloseConfirmation) {
    btnCloseConfirmation.addEventListener('click', () => {
      if (confirmationModal) confirmationModal.classList.remove('active');
    });
  }
});
