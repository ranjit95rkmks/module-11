import Link from "next/link";
import React from "react";
import data from "@/public/data.json"

const page = () => {
  // const data = getData();
 // const data = 
  // console.log(jsonData)

  return (
    <div>
      <h1>Data from JSON File</h1>
      <div className="grid grid-cols-4 gap-4 px-32">

      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="card w-96 bg-primary text-primary-content"
          >
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <Link href={`/blog/${item.id}`}><p className="card-actions justify-end"> বিস্তারিত...</p></Link>
              
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

// export async function getStaticProps() {
//   try {
//     const dataFilePath = "./public/data.json"; // Path to your data.json file
//     const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

//     return {
//       props: {
//         jsonData,
//       },
//     };
//   } catch (error) {
//     console.error("Error reading JSON file:", error);
//     return {
//       props: {
//         jsonData: null, // Provide default data or handle the error
//       },
//     };
//   }
// }
{
  /**
<div>
        {data && data.map((item) =>{
        <div key={item.id} className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>বিস্তারিত...</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>}) 
        }
      </div>
 */
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
