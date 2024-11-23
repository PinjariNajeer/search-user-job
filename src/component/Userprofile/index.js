import './index.css'

const UserProfile = (props) =>{
    const { userDetails, onDeleteUserss } = props;
    const { imageUrl, name, role, uniqueNo } = userDetails;
    const onDelete = () => {
        onDeleteUserss(uniqueNo);
    };
    return (
        <li className='user-card-container'>
            <img src={imageUrl} alt={name} className='profile-pic'/>
            <div className='user-details-container'>
                <h2 className='user-name'>{name}</h2>
                <p className='user-designation'>{role}</p>
                
            </div>
            <button type='button' className='delete-button' onClick={onDelete}> 
                <img  src='https://assets.ccbp.in/frontend/react-js/cross-img.png' alt='cross' className='delete-img'/>


            </button>
        </li>
    )
}

export default UserProfile;