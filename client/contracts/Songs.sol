// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <=0.9.0;
 
contract Songs {
    struct Form {
        string songThumbnail;
        string albumName;
        string userId;
        string artistName;
        uint256 price;
        string[] tune;
        string lyrics;
        string songName;
        bool favourited;
        string songDescription;
        address depositAddress;
        uint256 createdAt;
        uint256 updatedAt;
    }
 
    //mapping
    mapping(uint256 => Form) public uploadSong;
    //total song counts(unlike index)
    uint public totalSongsCount = 0;
 
    //saveSong
    function createSong(
        string memory _songThumbnail,
        string memory _albumName,
        string memory _userId,
        string memory _artistName,
        uint256 _price,
        string[] memory _tune,
        string memory _lyrics,
        string memory _songName,
        string memory _songDescription,
        address _depositAddress
    ) public returns(Form memory) {
        //to get timestamp of the date
        uint256 timenow = block.timestamp;
 
        //savesong property
        uint256 index = totalSongsCount++;
        Form storage song = uploadSong[index];
        //songdetails
        song.favourited = false;
        song.songThumbnail = _songThumbnail;
        song.albumName = _albumName;
        song.userId = _userId;
        song.artistName = _artistName;
        song.price = _price;
        song.tune = _tune;
        song.lyrics = _lyrics;
        song.songName = _songName;
        song.songDescription = _songDescription;
        song.depositAddress = _depositAddress;
        song.createdAt = timenow;
        song.updatedAt = timenow;
 
        return song;
    }
 
    //getallsongs
    function getAllSongs() public view returns(Form[] memory) {
        Form[] memory allSongs = new Form[](totalSongsCount);
        for(uint256 i = 0; i < totalSongsCount; i++) {
            allSongs[i] = uploadSong[i];
        }
        return allSongs;
    }

 
 
    function sendMoney(address _sendTo) external payable {
        (bool sent, ) = payable(_sendTo).call{value: msg.value}(
            "Transferred successfully"
        );
        require(sent, "Money Not sent");
    }
     
 function sendToUploader(
        address payable _uploader,
        address payable _admin
    ) external payable {
        // uint256 amountToSend = msg.value / 2; // Divide the received amount equally
 
        uint256 amountToAdmin = (msg.value) /2;
        uint256 amountToUploader = msg.value - amountToAdmin;
 
        (bool sent1, ) = _admin.call{value: amountToAdmin}(
            "Transferred to admin successfully"
        );
        require(sent1, "Failed to send money to admin");
 
        (bool sent2, ) = _uploader.call{value: amountToUploader}(
            "Transferred to uploader successfully"
        );
        require(sent2, "Failed to send money to uploader");
    }
 
}
 