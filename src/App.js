import "./App.css";
import fbLogo from "./images/fb.svg";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <>
      {" "}
      <div className="h-screen bg-gray-100 px-10">
        <div className="h-full container flex items-center justify-center bg-red mx-auto">
          <div className="left w-[570px] mr-14">
            <img className="w-80" src={fbLogo} alt="" />
            <p className="text-3xl mx-6">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="right drop-shadow-lg flex flex-col bg-white p-8 rounded-xl w-[396px] relative ">
            <input
              className="px-4 h-12 my-2 border border-1 rounded-lg border-gray-300 outline-blue-600"
              type="text"
              placeholder="Email address or phone number"
            />
            <input
              className="px-4 h-12 my-2 border border-1 rounded-lg border-gray-300 outline-blue-600"
              type="text"
              placeholder="Password"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold my-2 py-3 rounded-md text-xl">
              Log in
            </button>
            <span className="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline">
              Forgotten Password?
            </span>
            <hr className="my-2" />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold my-2 py-3 px-4 mx-auto rounded-md text-lg w-fit">
              Create new account
            </button>
            <span className="absolute -bottom-10 text-sm">
              <span className="font-bold hover:underline cursor-pointer">
                Create a Page
              </span>{" "}
              for a celebrity, brand or business.
            </span>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="w-3/5 text-sm text-slate-400 flex mx-auto md:mx-40 lg:mx-56 space-x-4">
          <div>English (UK)</div>
          <div>हिन्दी </div>
          <div>मराठी</div>
          <div>اردو </div>
          <div>ਪੰਜਾਬੀ</div>
          <div>বাংলা</div>
          <div> ગુજરાતી</div>
          <div>தமிழ்</div>
          <div>తెలుగు</div>
          <div>മലയാളം</div>
          <div>ಕನ್ನಡ</div>
          <AddIcon className="border border-1 border-slate-300 text-slate-500 w-8 h-4" />
        </div>
        <hr className="w-2/3 my-2 mx-auto md:mx-48 lg:mx-56"/>
        <div className="w-2/3  text-slate-400 flex mx-auto md:mx-40 lg:mx-56 gap-4 leading-[0.7] flex-wrap">
          <p className="text-xsm text-slate-400"> Hello </p>
          <p className="text-xsm text-slate-400"> Log in </p>
          <p className="text-xsm text-slate-400"> Messenger </p>
          <p className="text-xsm text-slate-400"> Facebook Lite </p>
          <p className="text-xsm text-slate-400"> Video </p>
          <p className="text-xsm text-slate-400"> Places </p>
          <p className="text-xsm text-slate-400"> Games </p>
          <p className="text-xsm text-slate-400"> Marketplace </p>
          <p className="text-xsm text-slate-400"> Meta Pay </p>
          <p className="text-xsm text-slate-400"> Meta Store </p>
          <p className="text-xsm text-slate-400"> Meta Quest </p>
          <p className="text-xsm text-slate-400"> Instagram </p>
          <p className="text-xsm text-slate-400"> Thread </p>
          <p className="text-xsm text-slate-400"> Fundraisers </p>
          <p className="text-xsm text-slate-400"> Services </p>
          <p className="text-xsm text-slate-400"> Voting Information Center</p>
          <p className="text-xsm text-slate-400"> Privacy Policy </p>
          <p className="text-xsm text-slate-400"> Privacy Center </p>
          <p className="text-xsm text-slate-400"> Groups </p>
          <p className="text-xsm text-slate-400"> About </p>
          <p className="text-xsm text-slate-400"> Create ad </p>
          <p className="text-xsm text-slate-400"> Create Page </p>
          <p className="text-xsm text-slate-400"> Developers </p>
          <p className="text-xsm text-slate-400"> Careers </p>
          <p className="text-xsm text-slate-400"> Cookies </p>
          <p className="text-xsm text-slate-400"> AdChoices </p>
          <p className="text-xsm text-slate-400"> Terms </p>
          <p className="text-xsm text-slate-400"> Help </p>
          <p className="text-xsm text-slate-400"> Contack uploading and non-users </p>
        </div>
      </div>
      <div className="md:mx-40 lg:mx-56 text-xsm text-slate-500 mb-7">Meta © 2024 </div>
    </>
  );
}

export default App;
