import { configureStore } from "@reduxjs/toolkit";
import changeTitleReducer from "../services/reducers/changeTitleReducer";
import bottomTabShown from "../services/reducers/bottomTabShown";
import isBoySectionOpen from "../services/reducers/isBoySectionOpen";
import isAuthorized from "../services/reducers/isAuthorized";
import userMe from "../services/reducers/userMe";
import loggedData from "../services/reducers/loggedData";
import selectedOptionText from "../services/reducers/selectedOptionText";
import NewLanguageId from "../services/reducers/NewLanguageId";

export const sotre = configureStore({
  reducer: {
    changeTitleReducer: changeTitleReducer,
    bottomTabShown: bottomTabShown,
    isBoySectionOpen: isBoySectionOpen,
    isAuthorized: isAuthorized,
    userMe: userMe,
    loggedData: loggedData,
    selectedOptionText:selectedOptionText,
    NewLanguageId:NewLanguageId
    
  },
});
