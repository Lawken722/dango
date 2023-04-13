import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

type LabourHour = {
  start: string;
  end: string;
};

const IndexPage: NextPage = (): ReactElement => {
    const [labourHours, setLabourHours] = useState<LabourHour>({start:'', end:''});
    const [restHours, setRestHours] = useState<RestHour>({start:'', end:''});
    const [result, setResult] = useState<string>('')

  return (
    <>
    
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-800 text-lg">勤務開始時間</span>
            <span className="text-gray-800 text-lg">勤務終了時間</span>
            <span className="text-gray-800 text-lg">労働時間</span>
           
            
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours({start:e.target.value, end:labourHours.end});
              }}
            />
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours({start:labourHours.start, end:e.target.value});
              }}
            />
            <span className="text-gray-800 text-lg">{result}</span>
            <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              const hoursAndMinutes = labourHours.start.split(':');
                console.log(hoursAndMinutes[0]);
                console.log(hoursAndMinutes[1]);
              const hoursAndMinutes2 = labourHours.end.split(':');
                console.log(hoursAndMinutes2[0]);
                console.log(hoursAndMinutes2[1]);
              const restHoursAndMinutes = restHours.start.split(':');
                console.log(restHoursAndMinutes[0]);
                console.log(restHoursAndMinutes[1]);
              const restHoursAndMinutes2 = restHours.end.split(':');
                console.log(restHoursAndMinutes2[0]);
                console.log(restHoursAndMinutes2[1]);
              const startHour = Number(hoursAndMinutes[0]);
              const startMinutes = Number(hoursAndMinutes[1]);
              const endHour = Number(hoursAndMinutes2[0]);
              const endMinutes = Number(hoursAndMinutes2[1]);
              const restStartHour = Number(restHoursAndMinutes[0]);
              const restStartMinutes = Number(restHoursAndMinutes[1]);
              const restEndHour = Number(restHoursAndMinutes2[0]);
              const restEndMinutes = Number(restHoursAndMinutes2[1]); 
              const Result2 =(((endHour * 60 + endMinutes) - (startHour * 60 + startMinutes)) - ((restEndHour *60 + restEndMinutes) - (restStartHour * 60 + restStartMinutes)));
              const ResultMin =(Result2 % 60);
              console.log(Result2);
              console.log(ResultMin);
              /* result/60:result% */
              setResult(`${Result2/60}:${ResultMin}`)
            }}>
            <span className="select-none text-xl">=</span>

          </Button>
          　<span className="text-gray-800 text-lg">休憩開始時間</span>
          　<span className="text-gray-800 text-lg">休憩終了時間</span>
          <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setRestHours({start:e.target.value, end:restHours.end});
              }}
            />
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setRestHours({start:restHours.start, end:e.target.value});
              }}
            />
            <span className="text-gray-800 text-lg">{result}</span>
            <span className="select-none text-xl font-mono text-gray-700 text-right">{labourHours.start}</span>
            <span className="select-none text-xl font-mono text-gray-700 text-right">{labourHours.end}</span>
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
