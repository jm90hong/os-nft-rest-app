


export default function VideoPage(){
    return (<>
        <div className="container">
            <main style={{height:'100%',paddingTop:'0px',boxSizing:'border-box'}}>
                <div className="inner" style={{width:'500px',overflow:'none'}}>
                    <div style={{color:'#fff',fontWeight:'700',fontSize:'20px',marginTop:'10px'}}>VIDEO 1</div>
                    <iframe width={'100%'} height={'90%'} src="http://3.36.28.140:8080/jumpit_clone/"></iframe>
                </div>
            </main>
        </div>
    </>);
}