import Account from "@/features/Account";
import { Memo } from "@/features/memo";
import { useSession } from "@supabase/auth-helpers-react";

const Post = () => {
  const session = useSession();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0", width: "300px" }}>
      <Account session={session} />
    </div>
  );
};

export default Post;

