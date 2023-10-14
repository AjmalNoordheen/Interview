import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import { IconButton } from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import GroupsIcon from "@mui/icons-material/Groups";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddCard from "@mui/icons-material/AddCard";

function PatientsList() {
  const [patientData, setPatientData] = useState("");

  useEffect(() => {
    axios
      .get(" https://pranavam-api.foxa.in/api/v2/patient/patients/")
      .then((res) => {
        console.log(res.data.data);
        setPatientData(res.data.data);
      });
  }, []);

  return (
    <div className="flex">
      {/* Side Bar Start */}
      <div className="w-2/12 bg-blue-950 h-screen">
        <div className="h-[20%] w-full bg-blue-950 flex justify-center items-center">
          <img src="/Rectangle 4453.png" className="w-full " alt="" />
        </div>

        <div className="flex flex-col  h-[60%] justify-center ml-5 gap-5">
          <div className="text-white font-medium hover:bg-blue-400 hover:p-2 hover:rounded hover:w-9/12 gap-x-4 flex">
            <WidgetsIcon fontSize="medium" className="" />
            <p>DashBoard</p>
          </div>

          <div className="text-white font-medium hover:bg-blue-400 hover:p-2 hover:rounded hover:w-9/12 gap-x-4 flex">
            <WheelchairPickupIcon fontSize="medium" />
            <p>Patients</p>
          </div>

          <div className="text-white font-medium hover:bg-blue-400 hover:p-2 hover:rounded hover:w-9/12 gap-x-4 flex">
            <GroupsIcon />
            <p>Physicians</p>
          </div>

          <div className="text-white font-medium hover:bg-blue-400 hover:p-2 hover:rounded hover:w-9/12 gap-x-4 flex">
            <AppRegistrationIcon />
            <p>Appointments</p>
          </div>

          <div className="text-white font-medium hover:bg-blue-400 hover:p-2 hover:rounded hover:w-11/12 gap-x-4 flex">
            <AddCard />
            <p>Generate Card</p>
          </div>
        </div>
      </div>
      {/* Side Bar Start End*/}

      <div className="w-10/12 bg-slate-100 h-screen">
        {/* Search Div  start*/}
        <div className="w-full h-20 bg-slate-100 flex items-center justify-around ">
          <div className="w-6/12"></div>
          <div className="w-5/12 bg-white h-3/5 flex rounded-md items-center justify-around">
            <div className="w-6/12 bg-slate-100 flex items-center justify-center gap-x-3 h-4/6 rounded">
              <SearchOutlinedIcon />
              <input
                className="w-10/12 bg-slate-100  h-full rounded"
                placeholder="Search Here"
                type="search"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <SettingsOutlinedIcon className="text-slate-500" />
              <NotificationsNoneOutlinedIcon className="text-slate-500" />
            </div>
            <div className="flex justify-around items-center gap-2">
              <div className="flex flex-col">
                <small className="font-semibold">Hospital Test</small>
                <small>(Hospital)</small>
              </div>
              <img src="" className="rounded-full bg-black h-11 w-11" alt="" />
            </div>
          </div>
        </div>
        {/* Search Div  End*/}

        {/* second Nav */}
        <div className="h-14 w-full overflow-scroll bg-slate-200">
          <div className="flex items-center h-full  gap-x-4">
            <small className="ml-2">
              Patient <ArrowForwardIosOutlinedIcon fontSize="" />{" "}
            </small>
            <p className="font-semibold">Patient List</p>
          </div>
        </div>
        <div className="h-12 w-full bg-slate-900  flex items-center justify-between ">
          <div className="w-36 ml-3 h-[92%] flex items-center bg-slate-400 rounded">
            <div>
              <IconButton>
                <FormatListBulletedOutlinedIcon className="text-white" />
              </IconButton>
            </div>
            <small className="font-semibold text-white">Patient List</small>
          </div>
          <div className="w-36 h-[92%] bg-blue-300 mr-3 flex items-center  rounded">
            <div className="ml-2">
              <IconButton>
                <PlaylistAddOutlinedIcon className="text-black" />
              </IconButton>
            </div>
            <small className="font-semibold">New Patient</small>
          </div>
        </div>

        {/* second Nav End */}

        {/* Patients List Tables Start */}
        <div className="w-full bg-slate-100 flex justify-center py-3 items-center h-4/6  overflow-scroll">
          <div className="w-[96%] h-full pb-3 rounded flex flex-col items-center  bg-white">
            <div className="flex items-center w-[98%]  text-xs md:text-base font-semibold justify-around h-1/6 border-b">
              <p className="w-1/6 ml-3">Patient ID</p>
              <p className="w-1/6 ">Name</p>
              <p className="w-1/6 ">Phone Number</p>
              <p className="w-1/6 ">Registered Date</p>
              <p className="w-1/6 ">Last Visit</p>
              <p className="w-1/6 ">File Number</p>
            </div>
            {patientData
              ? patientData.map((item) => (
                  <div
                    key={item.patient_id}
                    className="w-[98%] flex  justify-around text-xs md:text-base font-semibold  text-slate-600 h-1/6 bg-slate-100 rounded-lg mt-1 items-center "
                  >
                    <p className="w-1/6 ml-3">
                      {item ? item.patient_id.trim() : ""}
                    </p>
                    <p className="w-1/6">{item ? item.full_name.trim() : ""}</p>
                    <p className="w-1/6">{item ? item.mobile : ""}</p>
                    <p className="w-1/6">
                      {item
                        ? new Date(item.created_at).toLocaleDateString()
                        : ""}
                    </p>
                    <p className="w-1/6">
                      {item
                        ? item.medical_record
                          ? new Date(
                              item.medical_record.admission_date
                            ).toLocaleDateString()
                          : ""
                        : ""}
                    </p>
                    <p className="w-1/6">
                      {item
                        ? item.medical_record
                          ? item.medical_record.file_no
                          : ""
                        : ""}
                    </p>
                  </div>
                ))
              : ""}
          </div>
        </div>
        {/* Patients List Tables End */}
      </div>
    </div>
  );
}

export default PatientsList;
