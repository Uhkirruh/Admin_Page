import BranchTables from "../components/ui/branchTables";
export default function BranchAccounts() {
  return (
    // opening parent div
    <div className="bg-mist-100 h-full min-h-full p-4 flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">ACTIVE BRANCHES</p>
            <p>
              Manage secure access and database configuration for regional
              storefronts.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="text-blue-600 w-30 h-15 border rounded-lg shadow border-gray-300 px-4 py-2">
              Edit Account
            </button>
            <button className="text-white bg-[#0040A2] border-[#0040A2] w-40 h-15 border rounded-lg shadow px-4 py-2">
              Add New Branch
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow border border-gray-300 overflow-hidden">
        <BranchTables />
      </div>

      {/* Pageination */}
      <div className=" justify-center flex gap-3 pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a class="active" href="#">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
    // Closing parent div
  );
}
