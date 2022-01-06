import type { Translation } from '../i18n-types'

const ko: Translation = {
	editor: {
		menu: {
			file: "파일(&F)",
			library: "컬렉션(&L)",
			edit: "편집(&E)",
			preferences: "설정(&P)",
			help: "도움말(&H)",
			new: "새로운 채보(&N)",
			open: "열기(&O)",
			save: "저장(&S)",
			image: "이미지로 내보내기(&I)",
			undo: "실행 취소(&U)",
			redo: "다시 실행(&R)",
			selectall: "모두 선택(&A)",
			unselectall: "선택 취소(&U)",
			cut: "잘라내기(&X)",
			copy: "복사(&C)",
			paste: "붙여넣기(&V)",
			flippaste: "반전 붙여넣기(&F)",
			listall: "목록(&A)",
			upload: "업로드(&U)",
			language: "언어(&G)",
			rename: '이름 바꾸기(&R)',
			delete: '삭제(&D)',
			deleteall: '모두 삭제(&D)',
			duplicate: "복제(&U)",
			flip: "좌우 반전(&F)",
			straight: "직선(&S)",
			curvein: "커브 인(&I)",
			curveout: "커브 아웃(&O)",
			visible: "스텝 보이기(&B)",
			invisible: "스텝 숨기기(&N)",
			ignored: "스텝 무시(&G)",
			shrink: "축소(&K)",
			download: "다운로드(&D)",
		},
		menuDescription: {
			new: '새로운 채보를 만듭니다',
			open: '채보를 엽니다',
			save: '채보를 .sus 파일로 저장합니다',
			image: '채보를 이미지 파일로 내보냅니다',
			undo: '마지막 작업을 취소합니다',
			redo: '마지막 작업을 다시 실행합니다',
			selectall: '모든 노트를 선택합니다',
		},
		panel: {
			measure: "(소절)",
			totalcombo: '총 콤보 수',
			totalselected: '선택된 노트',
			skipstart: '처음으로',
			playpause: '재생/일시정지',
			skipback: '건너뛰기',
			scrollmode: '스크롤 모드',
			metadata: '채보 정보',
			title: '제목',
			artist: '가수/작곡가',
			author: '채보 제작자',
			statistics: '통계',
			history: '실행 내역',
			undo: '실행 취소',
			redo: '다시 실행',
			open: '열기',
			master: '마스터 볼륨',
			sfxvolume: 'SE 볼륨',
			music: '음악',
			musicfile: '음악 파일',
			control: '컨트롤',
			updatedTime: '갱신 시각',
			offset: '오프셋',
			seconds: '초',
			visibility: {
				taps: '탭',
				flicks: '플릭',
				slides: '슬라이드',
				slidesteps: '스텝',
				all: '모두',
			}
		},
		scrollmode: {
			page: '페이지',
			smooth: '스무스',
			none: '없음',
		},
		messages: {
			nonNumeralInputError: '숫자가 아닌 값을 입력하였습니다.',
			outOfRangeInputError: '{from}부터{to}까지의 값을 입력하였습니다.',
			projectSavedAs: '{project} (으)로 저장되었습니다.',
			loadingSUSSuccess: '{filename} (으)로 불러오기가 성공하였습니다.',
			loadingSUSError: 'SUS 파일을 불러오는 중 오류가 발생했습니다.',
			autoSaved: '자동 저장되었습니다.',
			saved: '저장되었습니다.',
			uploadNotSelectedError: '업로드할 노트를 선택하지 않았습니다.',
			inputTitlePrompt: '제목 입력',
			inputDescriptionPrompt: '설명 입력',
			inputEmptyError: '제목이나 설명을 입력하지 않았습니다.',
			uploaded: '업로드되었습니다.',
			uploadFailed: '업로드 중 오류가 발생했습니다.',
			exitConfirm: '종료하시겠습니까?',
			unknownFileType: '알 수 없는 파일 형식입니다.',
			loadingLibraryFailed: '컬렉션을 불러오는 중 오류가 발생했습니다.',
			preferencesSaved: '설정이 저장되었습니다.',
			deleteConfirm: '삭제하시겠습니까?',
			confirmBPMDetected: 'BPM이 감지되었습니다. BPM를 {bpm}(으)로 변경하시겠습니까?',
		},
		mutation: {
			update: '업데이트',
			append: '추가',
			cut: '잘라내기',
			set: '설정',
			delete: '삭제',
			flip: '반전',
			move: '이동',
			resize: "크기 조정",
			paste: '붙여넣기',
			message: "{amount}개의 {type}를 {operation}",
			target: {
				note: '노트',
				slide: '슬라이드',
				slidenote: '슬라이드 노트',
				timeSignature: '박자',
				bpm: "BPM",
			}
		},
		snapTo: {
			snap: '{n}분음표',
			custom: '사용자 설정',
			snapWithRange: '분음표 (1 ~ 1920)',
		},
		dialog: {
			bpmTitle: 'BPM 설정',
			timeSignatureTitle: '박자 설정',
			customSnappingTitle: '사용자 설정 분음표',
			imageTitle: '이미지로 내보내기',
			libraryTitle: '컬렉션',
			preferencesTitle: '환경설정',
			projectsTitle: '채보 목록',
			append: '추가',
			change: '변경',
			export: '내보내기',
			delete: '삭제',
			ok: '확인',
			new: '새로 만들기',
			opensus: 'SUS 파일 열기',
		},
		preferences: {
			autosaveInterval: '자동 저장 간격 (초)',
			scrollSpeed: '스크롤 속도',
			noteHeight: '노트 높이',
			minimapEnabled: '미니맵 (채보의 미리보기) 활성화',
		},
		modes: {
			select: "선택",
			tap: "탭",
			slide: "슬라이드",
			mid: "스텝",
			flick: "플릭",
			critical: "크리티컬",
			bpm: "BPM",
			timeSignature: "박자",
		}
	}
}

export default ko
