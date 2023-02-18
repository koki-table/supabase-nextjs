import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Memo } from "@/features/memo";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0", width: "300px" }}>
      {!session ? <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" /> : <Memo />}
    </div>
  );
};

export default Home;
