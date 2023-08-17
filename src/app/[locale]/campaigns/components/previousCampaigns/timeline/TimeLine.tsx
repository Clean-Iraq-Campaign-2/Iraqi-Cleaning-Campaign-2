import React from 'react'
import '../../../assets/style.css';
import Image from 'next/image';
import logo from "../../potentail-home2.jpeg"
import IPreviousCampaigns from "../../previousCampaigns/IPreviousCampaigns"
import Campaigns1 from "../../../assets/cleaning-11.jpeg";
import { faDraft2digital } from '@fortawesome/free-brands-svg-icons';
import { CampaignCard } from '../CampainsCard';

export const TimeLine = ({campaigns}:{campaigns:IPreviousCampaigns[]}) => {
  return ( <div className="main">
            <div className="container">
                <ul>
             { campaigns.map((item,index)=>(<li key={index}>
                        <CampaignCard item={item}/>
             </li>))}
                </ul>
            </div>
        </div>
  )
}

