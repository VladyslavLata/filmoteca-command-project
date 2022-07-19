export function disabledEl(btnEl) {
  if (!btnEl.hasAttribute('disabled')) {
    btnEl.setAttribute('disabled', '');
  }
}

export function unlockEl(btnEl) {
  if (btnEl.hasAttribute('disabled')) {
    btnEl.removeAttribute('disabled');
  }
}
