export class ConsentUseCase {
  consentAccept() {
    try {
      const date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `consent=true;${expires};path=/`;
    } catch (error) {
      console.error('Error accepting consent', error);
    }
  }
}
