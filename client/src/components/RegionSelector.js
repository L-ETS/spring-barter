import React, { useState } from "react";


function RegionSelector(props) {
  
  // const [wideRegion, setwideRegion] = useState('');
  // const [detailRegion, setDetailRegion] = useState('');

  const regions = {
    
    '경기': ['수원시', '고양시', '성남시', '용인시', '부천시', '안산시', '남양주시', '안양시', '화성시', '평택시', '의정부시', '시흥시', '파주시', '김포시', '광명시', '광주시', '군포시', '오산시', '이천시', '양주시', '안성시', '구리시', '포천시', '의왕시', '하남시', '여주시', '양평군', '동두천시', '과천시', '가평군', '연천군', ],

    '서울': ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
  
  };

  return (
    <div>
      <select 
        value={props.wideRegion}
        onChange={(e) => {
          props.setwideRegion(e.target.value);
          props.setDetailRegion(''); // Clear the sub-region when the main region changes
        }}>
        <option value="">선택</option>
        {Object.keys(regions).map(region => (
            <option key={region} value={region}>{region}</option>
        ))}
      </select>

      <select 
        value={props.detailRegion}
        onChange={(e) => props.setDetailRegion(e.target.value)}
        disabled={!props.wideRegion}>
        <option value="">선택</option>
        {
          props.wideRegion ?
          regions[props.wideRegion].map(region => (
              <option key={region} value={region}>{region}</option>
          )) : null
         }
      </select>
    </div>
  );
}

export default RegionSelector;