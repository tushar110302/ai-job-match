import { createContext, useContext, useState } from "react";

const InterviewContext = createContext(null);

export const InterviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);
  const [reports, setReports] = useState([]);

  return (
    <InterviewContext.Provider
      value={{ loading, setLoading, report, setReport, reports, setReports }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterviewContext = () => useContext(InterviewContext);
