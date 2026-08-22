const all_files = [
    {
        'subject': 'Digital Logic',
        'code': 'CSE-5213',
        'files': [
            {
                'title': 'Lecture 1',
                'topic': 'Introduction to Digital Logic',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1fUIZ8G6qBuC598PESY67uxzV2ht1gb4i/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture 2',
                'topic': 'Digital Logic',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1Cl6DWyY7K8ZI9TNUvtd8gl9m2v3EBdAk/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture-3',
                'topic': 'Combinational Logic Circuits',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1J2wL0PjGMYIR1TDQw2l2UcD-aCpWVDdt/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture-4',
                'topic': 'Multiplexer Demultiplexer Decoder Encoder',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1P5beHl3sE0GEjRJGWd_-I1A9KeZHl3Iq/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture-5',
                'topic': 'Arithmetic Circuits',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1aY1n0DEzv1S7-8LaF8R7HfC1I92Idpae/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture-7',
                'topic': 'Digital Circuits - Encoder Decoder',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1xRxRqMjOX3z4Sbt6GNdkmnjW1QWJ3JdF/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            },
            {
                'title': 'Lecture-9',
                'topic': 'Flip Flops',
                'file_type': 'pptx',
                'link': 'https://docs.google.com/presentation/d/1e3NsVfrdnx5JC_4jc019ifRY7X3qfBqg/edit?usp=sharing&ouid=103146060764539325917&rtpof=true&sd=true'
            }
        ]
    },
    {
        'subject': 'Introduction to Computer Systems',
        'code': 'CSE-5211',
        'files': [
            {
                'title': 'Lecture 1',
                'topic': 'Computer Generation',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1hS3dtL-JFyEPBn4f_RFkWPjI2g9hkaWe/view?usp=sharing'
            },
            {
                'title': 'Lecture 2',
                'topic': 'Data Representation',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1f4SL3xaq6DQ1SHidthnkW27YSbLNMM9I/view?usp=sharing'
            },
            {
                'title': 'Lecture 3',
                'topic': 'CPU and Memory',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1bubalseCehqFeiOqdYGW1jHZyl6wOi1u/view?usp=sharing'
            },
            {
                'title': 'Lecture 4',
                'topic': 'Processor and Memory',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1rx5CcIpXSQgjD5Zj_cccZWlCYBxwuir5/view?usp=sharing'
            },
            {
                'title': 'Lecture 5',
                'topic': 'Computer Software',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1MiXMtY8ORVJSVvVJIMZ9aGBPim6uhm34/view?usp=sharing'
            },
            {
                'title': 'Lecture 6',
                'topic': 'Computer Software',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1r0g8k5J7x2X3Q9Z4F5G6H7I8J9K0L1M2/view?usp=sharing'
            },
            {
                'title': 'Lecture 7',
                'topic': 'Operating Systems',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1tt746CSfNjs6ICcLvQVSYhqx-kG0qJef/view?usp=sharing'
            },
            {
                'title': 'Lecture 8',
                'topic': 'Internet and Webpage Design',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1QXUa1U7bJbg14olrfBn50vpp5V5EpyX3/view?usp=sharing'
            },
            {
                'title': 'Lecture 9',
                'topic': 'Computer Ethics Presentation',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1XBquH7sMuUN6hvoBkiJItpCWrQAfX9q4/view?usp=sharing'
            },
            {
                'title': 'Lecture 10',
                'topic': 'Computer Ethics',
                'file_type': 'pdf',
                'link': 'https://drive.google.com/file/d/1v6kk1iKtSTgyqeQvoiG1HxGAMmIT3QeM/view?usp=sharing'
            }
        ]
    }
]

const iconFor = (type) => {
    const t = (type || '').toLowerCase();
    if (t === 'pdf') return 'bi-file-earmark-pdf-fill';
    if (t === 'pptx' || t === 'ppt') return 'bi-file-earmark-slides-fill';
    if (t === 'doc' || t === 'docx') return 'bi-file-earmark-word-fill';
    return 'bi-file-earmark-fill';
};

const subjectIcons = [
    { keywords: ['digital', 'logic', 'circuit'], icon: 'bi-cpu-fill' },
    { keywords: ['computer system', 'hardware'], icon: 'bi-pc-display-horizontal' },
    { keywords: ['network'], icon: 'bi-hdd-network-fill' },
    { keywords: ['database', 'data'], icon: 'bi-database-fill' },
    { keywords: ['algorithm', 'programming', 'software'], icon: 'bi-code-slash' },
    { keywords: ['security', 'crypto'], icon: 'bi-shield-lock-fill' },
    { keywords: ['math', 'statistic'], icon: 'bi-calculator-fill' }
];

const iconForSubject = (subjectName) => {
    const name = (subjectName || '').toLowerCase();
    const match = subjectIcons.find(({ keywords }) => keywords.some(k => name.includes(k)));
    return match ? match.icon : 'bi-mortarboard-fill';
};

function render(filter = '') {
    const container = document.getElementById('subjectsContainer');
    const noResults = document.getElementById('noResults');
    const term = filter.trim().toLowerCase();
    container.innerHTML = '';
    let totalMatches = 0;

    all_files.forEach((subject, subjIdx) => {
        const matchedFiles = subject.files.filter(f =>
            !term ||
            subject.subject.toLowerCase().includes(term) ||
            subject.code.toLowerCase().includes(term) ||
            f.title.toLowerCase().includes(term) ||
            f.topic.toLowerCase().includes(term)
        );
        if (matchedFiles.length === 0) return;
        totalMatches += matchedFiles.length;

        const collapseId = `collapse-${subjIdx}`;
        const headingId = `heading-${subjIdx}`;
        const isExpanded = term.length > 0;

        const itemHtml = `
            <div class="subject-card">
                <button class="subject-header" type="button" id="${headingId}"
                    data-bs-toggle="collapse" data-bs-target="#${collapseId}"
                    aria-expanded="${isExpanded}" aria-controls="${collapseId}">
                    <span class="subject-avatar"><i class="bi ${iconForSubject(subject.subject)}"></i></span>
                    <span>
                        <span class="subject-title d-block">${subject.subject}</span>
                        <span class="subject-code-badge me-1">${subject.code}</span>
                        <span class="subject-count-badge">${matchedFiles.length} lecture${matchedFiles.length !== 1 ? 's' : ''}</span>
                    </span>
                    <i class="bi bi-chevron-down chevron"></i>
                </button>
                <div id="${collapseId}" class="collapse ${isExpanded ? 'show' : ''}" aria-labelledby="${headingId}">
                    <div class="file-list">
                        ${matchedFiles.map(f => `
                            <a href="${f.link}" target="_blank" rel="noopener noreferrer" class="file-item">
                                <span class="file-icon-wrap ${(f.file_type || '').toLowerCase()}">
                                    <i class="bi ${iconFor(f.file_type)}"></i>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="file-title d-block">${f.title}</span>
                                    <span class="file-topic">${f.topic}</span>
                                </span>
                                <span class="file-type-badge">${f.file_type}</span>
                                <i class="bi bi-box-arrow-up-right file-open-icon"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', itemHtml);
    });

    noResults.classList.toggle('d-none', totalMatches !== 0);
}

document.getElementById('searchBox').addEventListener('input', (e) => render(e.target.value));
render();