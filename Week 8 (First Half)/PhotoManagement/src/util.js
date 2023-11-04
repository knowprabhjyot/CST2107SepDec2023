const formatTime = (date) => {
    return new Date(date).getDate() + '-' + new Date(date).getMonth() + '-' + new Date(date).getFullYear();
}

export  { formatTime };