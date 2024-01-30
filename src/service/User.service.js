import { api } from "./baseurl";

export const Authenticate = async (arg,form) =>{ 
    try{
        const {data} = await api.get(arg);
        const finder =data.find((i) => i.email === form.email);
        if(!finder){
          throw new Error("User Not Found");
        }

        const comparePassword = finder.password === form.password;
        if(!comparePassword){
          throw new Error("User Not Found");
        }
      
        return finder;
    }catch (e) {
        throw new Error(e.message);
    }
};
