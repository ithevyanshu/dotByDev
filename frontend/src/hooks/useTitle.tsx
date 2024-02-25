import { useEffect } from "react";

const useTitle = (title: string) => {
    useEffect(() => {
        document.title = "Todo - " + title;
    }, [title]);
};

export default useTitle;