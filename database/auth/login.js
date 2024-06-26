import supabase from "../SupabaseConfig";

export async function signInWithEmail(email, senha) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: senha,
  });

  return {data, error};
};


