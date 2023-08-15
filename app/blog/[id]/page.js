import data from "@/public/data.json";

function page({ params }) {
  console.log(typeof Number(params.id));
  const mydata = data.filter((item) => {
    console.log(item.id);
    console.log(Number(params.id));
    return item.id === Number(params.id);
  });

  console.log(mydata);
  return (
    <div className="snap-center ">
      {mydata &&
        mydata.map((item) => (
          <li>
            <h2 className="card-title">{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
    </div>
  );
}

export default page;
