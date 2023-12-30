//This is a fetch method that is ready to be used with react query

const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  //reeact qury expects a promise to be returned
  return apiRes.json();
};

export default fetchPet;
