$(function() {
	$('#contents div[id != "tab1"]').hide();
	 
	// �^�u���N���b�N�����
	$("a").click(function(){
		// ��x�S�ẴR���e���c���\���ɂ���
		$("#contents div").hide();
 
		// ���ɑI�����ꂽ�R���e���c���ĕ\������
		$($(this).attr("href")).show();
		 
		// ���݂�current�N���X���폜
		$(".current").removeClass("current");
		 
		// �I�����ꂽ�^�u�i�������g�j��current�N���X��ǉ�
		$(this).addClass("current");
		 
		return false;
	});
});