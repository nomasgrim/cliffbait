const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select 
          name="type" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Type</option>
          <option value="finesse">Finesse</option>
          <option value="speed">Ultra Speed Worm</option>
        </select>
        <input 
          type="text" 
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input 
          type="text" 
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select 
          name="size" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Size</option>
          <option value="">Size</option>
        </select>
        <select 
          name="color" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Color</option>
          <option value="junebug">Junebug</option>
          <option value="crabapple">Crab Apple</option>
          <option value="watermelon">Watermelon</option>
        </select>
        <select 
          name="category" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Category</option>
          <option value="new">New Arrival</option>
          <option value="popular">Popular</option>
          <option value="all">All</option>
        </select>
        <select 
          name="" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select 
          name="" 
          id="" 
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>   
      </div>
    </div>
  );
};

export default Filter;