
class ManApi {
 
    static async getManById(id) {
      const response = await fetch(`/api/men/${id}`); //? дефолтный метод - GET
      return await response.json();
    }
  }
  
  export default ManApi;