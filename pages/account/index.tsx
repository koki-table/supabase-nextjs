import Account from "@/features/Account";
import { useSession } from "@supabase/auth-helpers-react";

const AccountPage = () => {
  const session = useSession();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0", width: "300px" }}>
      <>
        {session && <Account session={session} />}
      </>
    </div>
  );
};

export default AccountPage;

