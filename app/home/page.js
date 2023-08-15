
import React from 'react';
import getData from '../api/blog/router';

const page = () => {

  const data = getData();
  console.log(data)
 
    return (
        <div>
          <h1>Data from JSON File { data }</h1>
          <ul>
            {/* {data && data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))} */}
          </ul>
        </div>
      );
    }


    // export async function getStaticProps() {
    //   try {
    //     const response = await fetch('/public/data.json');

    //     console.log("what the"+response)
    //     const data = await response.json();
    
    //     return {
    //       props: {
    //         data,
    //       },
    //     };
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     return {
    //       props: {
    //         data: [], // Set a default value for data
    //       },
    //     };
    //   }
    // }
    

export default page;