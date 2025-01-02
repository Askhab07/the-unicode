import React from 'react';

const IsLoading = () => {
  return (
    <div className="mt-10 w-[1200px] rounded-2xl mx-auto">
      <div className="animate-pulse space-x-4">
        <div className="flex justify-between">
          <div className="w-[700px] h-[662px] bg-slate-200 rounded-xl"></div>
            <div className="flex flex-col justify-between">
              <div className="w-[484px] h-[323px] bg-slate-200 rounded-xl"></div>
              <div className="w-[484px] h-[323px] bg-slate-200 rounded-xl"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IsLoading;
