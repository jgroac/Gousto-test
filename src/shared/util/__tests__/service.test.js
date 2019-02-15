import Service from '../service/Service.factory';
import categoriesResponse from '../mocks/categories.mock';
import productsResponse from '../mocks/products.mock';

describe('service', () => {
  it('should get the categories', async () => {
    const get = jest.fn().mockResolvedValue(categoriesResponse);
    const axiosMock = { get };
    const service = new Service(axiosMock);
    const categories = await service.getCategories();
    expect(get).toHaveBeenCalledWith('https://api.gousto.co.uk/products/v2.0/categories');
    expect(categories).toEqual(categoriesResponse);
  });

  it('should get the products', async () => {
    const get = jest.fn().mockResolvedValue(productsResponse);
    const axiosMock = { get };

    const service = new Service(axiosMock);
    const products = await service.getProducts();
    expect(get).toHaveBeenCalledWith(
      'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i%20mage_sizes[]=400&period_id=120%20For%20cross%20origin%20accessibility%20please'
    );
    expect(products).toEqual(productsResponse);
  });
});
