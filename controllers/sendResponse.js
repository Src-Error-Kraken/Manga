
function sendOkResp(req, res) {
    res.json({
        status: 'ok',
        data: res.locals.mangas || res.locals.manga
    });
}

function sendErrResp(err, req, res, next) {
    console.log('HIHIHIIIHIHI',err);
    res.json({
        status: 'erroneus',
        msg: err.message
    });
}

module.exports = {
    sendOkResp,
    sendErrResp
};
