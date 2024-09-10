import ListJobs from "./ListJobs";

const JobBoard = () => {
  return (
    <div className="container mx-auto">
      <div className="p-8 border-b-2 mt-2">
        <h1 className="text-xl font-bold">Job Board</h1>
      </div>
      <ListJobs></ListJobs>
    </div>
  );
};

export default JobBoard;
