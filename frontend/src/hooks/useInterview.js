import { useInterviewContext } from "@/context/interview.context";
import React from "react";

const useInterview = () => {
  const { loading, setLoading, report, setReport, reports, setReports } =
    useInterviewContext();

  return {};
};

export default useInterview;