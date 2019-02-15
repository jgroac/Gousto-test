class Service {
  constructor(axios) {
    this.axios = axios;
    this.baseApi = 'https://api.gousto.co.uk/products/v2.0';
  }

  // eslint-disable-next-line class-methods-use-this
  checkForArray(response) {
    if (!Array.isArray(response.data.data)) {
      throw new Error('The response data is not valid');
    }
  }

  async getCategories() {
    const response = await this.axios.get(`${this.baseApi}/categories`);
    this.checkForArray(response);
    return response;
  }

  async getProducts() {
    const response = await this.axios.get(
      `${this.baseApi}/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i%20mage_sizes[]=400&period_id=120%20For%20cross%20origin%20accessibility%20please`
    );
    this.checkForArray(response);

    return response;
  }
}

export default Service;
