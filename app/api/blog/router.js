
export default async function getData(){
   // try {
        const response = await fetch('../../../public/data.json');
        //const data = await response.json();
        if(response.ok){
            throw new Error("fuck you")
        }

        return response.json()
        
         
      //} catch (error) {
    //     console.error('Error fetching data:', error);
    //     return {
    //       props: {
    //         data: [], // Set a default value for data
    //       },
    //     };
    //   }

}