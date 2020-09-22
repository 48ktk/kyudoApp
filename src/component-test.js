import React from 'react'
import ReactDOM from 'react-dom'
import './kyudo-table.css'

ReactDOM.render(
  <h1>Hello, world!!</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <table width="98%">
        {/* <!-- 合計 --> */}
        <tbody className="total">
          <tr>
          <th className="player5">15</th>
          <th className="player6">15</th>
          <th className="player7">15</th>
          <th className="player8">15</th>
          <th>60</th>
          <th>120</th>
          <th>60</th>
          <th className="player4">15</th>
          <th className="player3">15</th>
          <th className="player2">15</th>
          <th className="player1">15</th>
        </tr>
        </tbody>
        {/* <!-- 1立目 --> */}
        <tbody className="try1">
          {/* <!-- 4射目 --> */}
          <tr>
            <td className="player5 atodachi">〇</td>
            <td className="player6 atodachi">〇</td>
            <td className="player7 atodachi">〇</td>
            <td className="player8 atodachi">〇</td>
            <td className="atodachi-try1-sum"></td>
            <td className="try1-sum"></td>
            <td className="sakidachi-try1-sum"></td>
            <td className="player4 sakidachi">〇</td>
            <td className="player3 sakidachi">〇</td>
            <td className="player2 sakidachi">〇</td>
            <td className="player1 sakidachi">〇</td>
          </tr>
          {/* <!-- 3射目 --> */}
          <tr>
            <td className="player5 atodachi">〇</td>
            <td className="player6 atodachi">〇</td>
            <td className="player7 atodachi">〇</td>
            <td className="player8 atodachi">〇</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="player4 sakidachi">〇</td>
            <td className="player3 sakidachi">〇</td>
            <td className="player2 sakidachi">〇</td>
            <td className="player1 sakidachi">〇</td>
          </tr>
          {/* <!-- 2射目 --> */}
          <tr>
            <td className="player5 atodachi">〇</td>
            <td className="player6 atodachi">〇</td>
            <td className="player7 atodachi">〇</td>
            <td className="player8 atodachi">〇</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="player4 sakidachi">〇</td>
            <td className="player3 sakidachi">〇</td>
            <td className="player2 sakidachi">〇</td>
            <td className="player1 sakidachi">〇</td>
          </tr>
          {/* <!-- 1射目 --> */}
          <tr>
            <td className="player5 atodachi">〇</td>
            <td className="player6 atodachi">〇</td>
            <td className="player7 atodachi">〇</td>
            <td className="player8 atodachi">〇</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="player4 sakidachi">〇</td>
            <td className="player3 sakidachi">〇</td>
            <td className="player2 sakidachi">〇</td>
            <td className="player1 sakidachi">〇</td>
          </tr>
        </tbody>
        {/* <!-- 選手 --> */}
        <tbody className="player">
          <tr>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td></td>
            <td></td>
            <td></td>
            <td>D</td>
            <td>C</td>
            <td>B</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>,
  document.getElementById('kyudo-table')
);