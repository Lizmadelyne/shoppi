

function    MyAccount(){
    return(
        <div className="">
           <h1 className="text-center text-lg font-bold mt-20 mb-3 text-black">Form Register</h1>
         < form>
  <div className="flex items-center  justify-center h-full bg-white">
    <div className="bg-white py-6 border-l-slate-600 rounded-md px-10 max-w-lg shadow-md">
     
      <div className="space-y-4 mt-6">
        <div className="w-full border-dotted border-l-slate-500">
          <input type="text" placeholder="fullname" className="px-4 py-2 bg-gray-50 " />
        </div>
        <div className="w-full">
          <input type="text" placeholder="username" className="px-4 py-2 bg-gray-50" />
        </div>
        <div className="w-full">
          <input type="text" placeholder="email" className="px-4 py-2 bg-gray-50" />
        </div>
        <div className="w-full">
          <input type="text" placeholder="password" className="px-4 py-2 bg-gray-50" />
        </div>
      </div>
      <button className="w-full mt-5 bg-black  hover:bg-slate-400 text-white py-2 rounded-md font-semibold tracking-tight">Register</button>
    </div>
  </div>
</form>

        </div>
    )
}
export default MyAccount  ;