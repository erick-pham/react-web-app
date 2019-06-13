import Items from '../mockdata/Items';

export const getProducts = async () => {
  //const response = await getAPIInstance(token).get('ap/tenants');
  return {
    error: false,
    message: null,
    data: Items
  };
};
