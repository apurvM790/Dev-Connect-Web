import { useDispatch, useSelector } from "react-redux";
import NoChatSelected from "./NoChatSelected";
import SideBar from "./SideBar";
import ChatUser from "./ChatUser";
import NoSideBar from "./NoSideBar";
import { useEffect } from "react";
import { fetchUser } from "../utils/chatSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store?.chat?.users?.data);
  const selectedUser = useSelector((state) => state?.chat?.selectedUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="h-full pb-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="flex justify-center pt-14 px-4">
        <div className="rounded-lg w-full max-w-6xl min-h-[calc(100vh-5rem)] overflow-visible relative shadow-[0_0_40px_10px_rgba(0,0,0,0.6)] border border-neutral-800 bg-black/25 backdrop-blur-md">
          <div className="flex rounded-lg h-full">
            {users === undefined || users.length === 0 ? (
              <NoSideBar />
            ) : (
              <div className="flex-col w-3/12 pt-6 items-center border-r-4 border-r-neutral-800">
                {users.map((curr) => (
                  <SideBar key={curr._id} userData={curr} />
                ))}
              </div>
            )}

            <div className="w-9/12">
              {!selectedUser ? <NoChatSelected /> : <ChatUser />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
