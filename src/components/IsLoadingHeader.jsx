import React from 'react';

const IsLoadingHeader = () => {
  return (
    <div className="mt-10 w-[1200px] rounded-2xl mx-auto">
      <div className="animate-pulse space-x-4 flex justify-center">
        <div className="w-[800px] flex justify-between">
          <div className="w-52 h-5 bg-slate-200 rounded-xl"></div>
          <div className="w-52 h-5 bg-slate-200 rounded-xl"></div>
          <div className="w-52 h-5 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default IsLoadingHeader;
