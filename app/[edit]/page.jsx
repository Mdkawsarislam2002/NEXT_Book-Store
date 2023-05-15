import Edit from "@components/Edit";

const page = ({ params }) => {
  return (
    <div>
      <Edit id={params.edit} />
    </div>
  );
};

export default page;
