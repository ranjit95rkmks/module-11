import data from "@/public/data.json";

function page({ params }) {
    console.log(typeof(Number(params.id)))
  const mydata = data.filter((item) => {
    console.log(item.id)
    console.log(Number(params.id))
    return item.id === Number(params.id);
  });

  console.log(mydata)
  return (
    <div>
      {mydata &&
        mydata.map((item) => (
          <div
            key={item.id}
            className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default page;
