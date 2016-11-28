import React from 'react';

const HerosIndexDetail = ({hero}) => {
  if(!hero.Name) {
    return (<div className="heros-index-detail" />);
  } else {
    return (
      <div className="heros-index-detail">
        <div>Name:        {hero.Name}</div>
        <div>BaseAgi:     {hero.BaseAgi}</div>
        <div>BaseInt:     {hero.BaseInt}</div>
        <div>BaseStr:     {hero.BaseStr}</div>
        <div>AgiGain:     {hero.AgiGain}</div>
        <div>IntGain:     {hero.IntGain}</div>
        <div>StrGain:     {hero.StrGain}</div>
        <div>DayVision:   {hero.DayVision}</div>
        <div>NightVision: {hero.NightVision}</div>
        <div>MoveSpeed:   {hero.MoveSpeed}</div>
        <div>Range:       {hero.Range}</div>
        <div>Turnrate:    {hero.Turnrate}</div>
        <div>MaxDmg:      {hero.MaxDmg}</div>
        <div>MinDmg       {hero.MinDmg}</div>
        <div>Mana:        {hero.Mana}</div>
        <div>ManaRegen:   {hero.ManaRegen}</div>
        <div>HP:          {hero.HP}</div>
        <div>HPRegen:     {hero.HPRegen}</div>
      </div>
    );
  }
};

export default HerosIndexDetail;
