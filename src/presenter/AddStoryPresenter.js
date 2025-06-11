import PostData from '../data/PostData.js';

class AddStoryPresenter {
  constructor(view) {
    this.view = view;
    this.model = new PostData('https://story-api.dicoding.dev/v1');
  }

  async submitStory({ description, photo, lat, lon, token }) {
    const data = new FormData();
    data.append('description', description);
    data.append('photo', photo, 'foto.png');
    data.append('lat', lat);
    data.append('lon', lon);

    try {
      await this.model.addStory(data, token);
      this.view.showSuccess('Cerita berhasil dikirim!');
      window.location.hash = '#/';
    } catch (error) {
      this.view.showError('Gagal mengirim cerita: ' + error.message);
    }
  }
}

export default AddStoryPresenter;
