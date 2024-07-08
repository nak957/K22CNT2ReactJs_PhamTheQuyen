import React, { useState } from 'react';
import './App.css';
import PtqSinhVienList from './components/PtqSinhVienList';
import PtqSinhVienAddOrEdit from './components/PtqSinhVienAddOrEdit';

function PtqApp() {
  const mockPTqSinhVienList = [
    {
      PtqHoSV: "Phạm",
      PtqTenSV: "Thế Quyền",
      PtqPhai: "Nam",
      PtqNgaySinh: 14112004,
      PtqNoiSinh: "Hưng Yên",
      PtqMaKH: "CNTT",
      PtqHocBong: "0",
      PtqDiemTrungBinh: "6,5",
      PtqMaSV: "2210900059"
    }
  ];

  const [ptqsinhVienList, setPtqSinhVienList] = useState(mockPTqSinhVienList);
  const [ptqshowAddOrEdit, setPtqShowAddOrEdit] = useState(false);
  const [ptqselectedSinhVien, setPtqSelectedSinhVien] = useState(null);

  const PtqhandleAddNew = () => {
    setPtqSelectedSinhVien(null);
    setPtqShowAddOrEdit(true);
  };

  const PtqhandleEdit = (sinhVien) => {
    setPtqSelectedSinhVien(sinhVien);
    setPtqShowAddOrEdit(true);
  };

  const PtqhandleSave = (newPtqSinhVien) => {
    console.log('Saving sinh vien:', newPtqSinhVien);
  
    if (ptqselectedSinhVien) {
      const updatedSinhVienList = ptqsinhVienList.map((sv) =>
        sv.PtqMaSV === ptqselectedSinhVien.PtqMaSV ? newPtqSinhVien : sv
      );
      setPtqSinhVienList(updatedSinhVienList);
    } else {
      setPtqSinhVienList([...ptqsinhVienList, newPtqSinhVien]);
    }
    setPtqShowAddOrEdit(false);
  };

  const PtqhandleCancel = () => {
    setPtqShowAddOrEdit(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ứng dụng Quản lý Sinh viên</h1>
      </header>
      <main>
        {ptqshowAddOrEdit ? (
          <PtqSinhVienAddOrEdit
            sinhVien={ptqselectedSinhVien}
            onSave={PtqhandleSave}
            onCancel={PtqhandleCancel}
          />
        ) : (
          <div>
            <PtqSinhVienList
              sinhVienList={ptqsinhVienList}
              onEdit={PtqhandleEdit}
            />
            <button onClick={PtqhandleAddNew}>Thêm mới</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default PtqApp;
