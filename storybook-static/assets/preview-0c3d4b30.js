const e={parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0e1f"},{name:"panel",value:"#11162d"},{name:"light",value:"#ffffff"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},designToken:{defaultTab:"Colors",styleInjection:'@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&display=swap");'}},decorators:[a=>({components:{story:a},template:`
        <div style="font-family: 'Manrope', sans-serif; color: #ffffff;">
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
          <story />
        </div>
      `})]};export{e as default};
