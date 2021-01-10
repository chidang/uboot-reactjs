import ChatHeader from './ChatHeader';
import ChatLeft from './ChatLeft';
import ChatContent from './ChatContent';

const Chat = () => {
    return <>
       <ChatHeader />
        <div className="row">
            <div className="col-xl-3 col-lg-4">
                <ChatLeft />
            </div>
            <div className="col-xl-9 col-lg-8">
                <ChatContent />
            </div>
        </div>
    </>
}

export default Chat;
