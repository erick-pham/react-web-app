import Items from '../mockdata/Items';

export const getProductsAPI = async () => {
  //const response = await getAPIInstance(token).get('ap/tenants');
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        error: false,
        message: null,
        data: Items
      });
    }, 2000);
  });
};
