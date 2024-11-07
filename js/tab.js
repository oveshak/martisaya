function openTab(tabId) {
    // Hide all content
    document.getElementById('content1').classList.add('hidden');
    document.getElementById('content2').classList.add('hidden');

    // Remove active styles from all tabs
    document.getElementById('tab1').classList.remove('border-blue-500', 'text-blue-600', 'font-bold');
    document.getElementById('tab2').classList.remove('border-blue-500', 'text-blue-600', 'font-bold');
    document.getElementById('tab1').classList.add('text-gray-500');
    document.getElementById('tab2').classList.add('text-gray-500');

    // Show the selected content and add active styles to the selected tab
    document.getElementById(tabId).classList.remove('hidden');
    const activeTab = document.getElementById(tabId === 'content1' ? 'tab1' : 'tab2');
    activeTab.classList.add('border-blue-500', 'text-blue-600', 'font-bold');
    activeTab.classList.remove('text-gray-500');
}

// Set initial active tab
openTab('content1');