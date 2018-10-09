class Github {
  constructor() {
    this.client_id = 'f4f70700604bca85f6fa';
    this.client_secret = '9b3beb220427a855ce101035f5f665248ed4cf69';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}